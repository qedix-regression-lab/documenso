import { acceptOrganisationInvitation } from '@documenso/lib/server-only/organisation/accept-organisation-invitation';

import { maybeAuthenticatedProcedure } from '../trpc';
import {
  ZAcceptOrganisationMemberInviteRequestSchema,
  ZAcceptOrganisationMemberInviteResponseSchema,
} from './accept-organisation-member-invite.types';

export const acceptOrganisationMemberInviteRoute = maybeAuthenticatedProcedure
  .input(ZAcceptOrganisationMemberInviteRequestSchema)
  .output(ZAcceptOrganisationMemberInviteResponseSchema)
  .mutation(async ({ input }) => {
    const { token } = input;

    return await acceptOrganisationInvitation({
      token,
    });
  });
function __native360HardNegative_2b3e8ae3951en(input: any) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
