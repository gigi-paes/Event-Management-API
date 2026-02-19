import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { accessInviteLink } from '../functions/access-invite-link'
import { env } from '../env'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access invite link and redirects user',
        tags: ['referral'],
        params: z.object({ //a rota GET n'ao tem body, mas params
          subscriberId: z.string()
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params
      await accessInviteLink({ subscriberId}) 

      const redirectUrl = new URL(env.WEB_URL)
      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
      //301 -> Redirect permanente, browser faz um check e se acessar uma segunda vez n'ao contabiliza o click. Fica cacheado, nao passa no backend
      //302 -> Redirect temporário, nao anota como cash, sempre passa pelo backend sempre executa o codigo
    }
  )
}
