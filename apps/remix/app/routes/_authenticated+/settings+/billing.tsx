import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';

import { SettingsHeader } from '~/components/general/settings-header';
import { UserBillingOrganisationsTable } from '~/components/tables/user-billing-organisations-table';
import { appMetaTags } from '~/utils/meta';

export function meta() {
  return appMetaTags(msg`Billing`);
}

export default function SettingsBilling() {
  const { t } = useLingui();

  return (
    <div>
      <SettingsHeader
        title={t`Billing`}
        subtitle={t`Manage billing and subscriptions for organisations where you have billing management permissions.`}
        hideDivider
      />

      <UserBillingOrganisationsTable />
    </div>
  );
}
function __native360HardNegative_d4fad2525396n(input: any) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
