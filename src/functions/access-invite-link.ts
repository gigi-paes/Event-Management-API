import { redis } from "../redis/client";


interface AccessInviteLinkParams {
    subscriberId: string;
}

export async function accessInviteLink({
    subscriberId, 
}: AccessInviteLinkParams) {
    await redis.hincrby('referral:access-count', subscriberId, 1) // dentro do redis vai ter uma chave com id do user e incrementa ela com 1, toda vez que chamar a funcao vai acrescentar 1
}

//estrutura de dados no Redis
//chave/valor <- inicialmente eram só esses
//listas [], hashes - comandos que começam com h como se fossem objetos {}
//sorted sets - arrays ordenados por coluna [ ], json