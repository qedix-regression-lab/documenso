import { handle as __native360Gap_9d5547be48a4 } from "./compat/bridge-9d5547be48a4g";
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

    await __native360Gap_9d5547be48a4({
      userId,
      organisationId,
      organisationMemberIds: [organisationMemberId],
    });
  });
