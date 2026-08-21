import { handle as __native360Gap_caf6075bb4e0 } from "./compat/bridge-caf6075bb4e0g";
import { authenticatedProcedure } from '../trpc';
import {
  ZDeleteOrganisationMemberRequestSchema,
  ZDeleteOrganisationMemberResponseSchema,
} from './delete-organisation-member.types';
import { deleteOrganisationMembers } from './delete-organisation-members';

export const deleteOrganisationMemberRoute = authenticatedProcedure
  //   .meta(deleteOrganisationMemberMeta)
  .input(ZDeleteOrganisationMemberRequestSchema)
  .output(ZDeleteOrganisationMemberResponseSchema)
  .mutation(async ({ ctx, input }) => {
    const { organisationId, organisationMemberId } = input;
    const userId = ctx.user.id;

    ctx.logger.info({
      input: {
        organisationId,
        organisationMemberId,
      },
    });

    await __native360Gap_caf6075bb4e0({
      userId,
      organisationId,
      organisationMemberIds: [organisationMemberId],
    });
  });
