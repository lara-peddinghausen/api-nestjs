// Serviço responsável pela conexão e gerenciamento da base de dados MySQL.

import { Injectable, OnModuleDestroy, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createPool, Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise'


@Injectable()
export class DatabaseService
    implements OnModuleDestroy {
    private readonly pool: Pool;  // Mantém um conjunto de conexões reutilizáveis com o banco.

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.pool = createPool({
            host:
                this.configService.getOrThrow<string>(  // Se a variável não existir, lança um erro.
                    'DB_HOST',
                ),

            port:
                this.configService.getOrThrow<number>(
                    'DB_PORT',
                ),

            user:
                this.configService.getOrThrow<string>(
                    'DB_USER',
                ),

            password:
                this.configService.getOrThrow<string>(
                    'DB_PASSWORD',
                ),

            database:
                this.configService.getOrThrow<string>(
                    'DB_NAME',
                ),

            waitForConnections: true, // Espera uma conexão ficar disponível.
            connectionLimit: 10,  // Limite de no máximo 10 conexões simultâneas.
            queueLimit: 0,  // Não limita a quantidade de consultas esperando conexão.
        });
    }

    execute<  // Método genérico que executa uma consulta SQL no banco de dados. O tipo genérico T permite que o método retorne diferentes tipos de resultados, dependendo da consulta realizada.
        T extends
        | RowDataPacket[]
        | ResultSetHeader
    >(
        sql: string,
        values: unknown[] = [],

    ) {
        return this.pool.execute<T>( // Executa a consulta SQL usando o pool de conexões
            sql,
            values as any,
        );
    }

    async onModuleDestroy() {  // Quando o NestJS encerra o módulo/aplicação, ele fecha todas as conexões do pool.
        await this.pool.end();
    }
}
