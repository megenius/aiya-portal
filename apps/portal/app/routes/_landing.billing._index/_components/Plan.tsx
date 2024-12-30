import { Loading } from '@repo/preline';
import { format, formatDate } from 'date-fns';
import { enUS, th } from 'date-fns/locale';
import * as _ from 'lodash';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { SaasSubscription } from '~/@types/app';
import DeleteModal from '~/components/DeleteModal';
import { useCancelSubscription } from '~/hooks/billings/useCancelSubscription';
import useCurrentBillingUsage from '~/hooks/billings/useCurrentBillingUsage';

interface PlanProps {
  subscription: SaasSubscription;
  onCanceled?: () => void;
}

const Config = {
  "free": {
    rects: [{ y: 5, fill: "fill-blue-300 dark:fill-blue-600" }],
  },
  "starter": {
    rects: [
      { y: 5, fill: "fill-blue-300 dark:fill-blue-600" },
      { x: 14, y: 5, fill: "fill-blue-500 dark:fill-blue-700" },
    ],
  },
  "growth": {
    rects: [
      { x: 7, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
      { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
      { x: 14, y: 10, fill: "fill-blue-500 dark:fill-blue-700" },
    ],
  }
}

const Plan: React.FC<PlanProps> = ({ subscription, onCanceled }) => {
  const { data } = useCurrentBillingUsage({ subscription });

  const { t } = useTranslation()
  const { i18n } = useTranslation();
  const locales = {
    th: th,
    en: enUS
  };

  const ShowTime = ({ subscription }: { subscription: SaasSubscription }) => {

    if (subscription?.cancel_at_period_end) {
      return (
        <p className="mt-1.5 text-sm text-gray-500 dark:text-neutral-500">
          {t('billing.plan.cancelled_on', {
            date: formatDate(subscription?.current_period_end, 'PPP', {
              locale: locales[i18n.language] || enUS
            })
          })}
        </p>)
    }

    return (
      <p className="mt-1.5 text-sm text-gray-500 dark:text-neutral-500">
        {t('billing.plan.renews_on', {
          date: format(subscription?.current_period_end, 'PPP', {
            locale: locales[i18n.language] || enUS
          })
        })}
      </p>
    )
  }


  if (!data) {
    return <Loading />
  }

  return (
    <>
      {/* Card */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Body */}
        <div className="h-full p-6">
          <svg className="w-[34px] h-[30px]" width={34} height={30} viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Config[subscription?.plan_type as string || "free"].rects.map((rect, idx) => (
              <rect
                key={idx}
                x={rect.x || 0}
                y={rect.y || 0}
                width={20}
                height={20}
                rx={10}
                fill="currentColor"
                className={rect.fill}
              />
            ))}
          </svg>
          {/* Grid */}
          <div className="mt-3 grid grid-cols-2 gap-x-2">
            <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                  {_.capitalize(subscription?.plan_type || "free plan")}
                </h2>
                <span className="inline-flex items-center gap-1.5 py-1.5 px-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">
                  <span className="size-1.5 inline-block bg-blue-800 rounded-full dark:bg-blue-500" />
                  {t('billing.plan.active')}
                </span>
              </div>
              {subscription && (
                <ShowTime subscription={subscription} />
              )}
            </div>
            {/* End Col */}
            <div className="text-end">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                {subscription?.status === 'trialing' ? (
                  <>
                    {t('billing.plan.trial')}
                  </>
                ) :
                  (<>
                    <NumericFormat value={subscription?.amount} displayType="text" thousandSeparator={true} prefix={subscription?.currency?.toLocaleUpperCase() + " "} />
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {subscription?.interval ? subscription?.interval + "ly" : ""}
                    </p>
                  </>
                  )
                }
              </h2>

            </div>
            {/* End Col */}
          </div>

          {/* End Grid */}
          {/* Progress */}
          <UsageIndicator title={t("billing.plan.features.auto_replies")} remaining={(subscription?.features?.auto_replies || 5000) - data?.auto_reply} total={subscription?.features?.auto_replies || 10000} />
          <UsageIndicator title={t("billing.plan.features.smart_replies")} remaining={(subscription?.features?.smart_replies || 150) - data?.smart_reply} total={subscription?.features?.smart_replies || 150} />
          <UsageIndicator title={t("billing.plan.features.generative_replies")} remaining={(subscription?.features?.generative_replies || 20) - data?.generative_reply} total={subscription?.features?.generative_replies || 20} />
          <UsageIndicator title={t("billing.plan.features.check_slip")} remaining={(subscription?.features?.check_slip || 15) - data?.check_slip} total={subscription?.features?.check_slip || 15} />
          {/* End Progress */}
          <div className="hidden flex justify-end items-center gap-x-2">
            <div className="hs-tooltip inline-block">
              <svg className="shrink-0 size-5 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={10} />
                <path d="m16 12-4-4-4 4" />
                <path d="M12 16V8" />
              </svg>
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 max-w-48 text-center py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Upgrade your plan to unlock the Manage Seats feature
              </span>
            </div>
            <button type="button" className="hs-tooltip-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" disabled>
              Manage seats
            </button>
          </div>
        </div>
        {/* End Body */}
        {/* Footer */}
        {!subscription?.cancel_at_period_end && (
          <div className="flex -space-x-px border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            {subscription && subscription.plan_type !== 'free' ? (
              <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dlcsam"
              >
                {t('billing.plan.actions.cancel')}
              </button>
            ) : (
              <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="/plans">
                {t('billing.plan.actions.upgrade')}
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            )}
          </div>
        )}
        {/* End Footer */}
      </div>
      {/* End Card */}
      <DeleteModal id="hs-pro-dlcsam"
        title={t("billing.subscription.cancel.title")}
        warning={t("billing.subscription.cancel.warning")}
        confirmButton={t("billing.subscription.cancel.confirmButton")}
        cancelButton={t("billing.subscription.cancel.cancelButton")}
        onOk={onCanceled}
      />
    </>
  );
};

export default Plan;


const UsageIndicator: React.FC<{ title: string, remaining: number, total: number }> = ({ title, remaining, total }) => {
  const { t } = useTranslation()
  return (
    <div className="my-4">
      <div className="flex justify-between items-center gap-x-2 mb-1">
        <h4 className="font-medium text-gray-800 dark:text-neutral-200">
          {title}
        </h4>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          {t('billing.plan.features.remaining_of_total', { remaining: remaining?.toLocaleString(), total: total?.toLocaleString() })}
        </p>
      </div>
      <div className="flex w-full h-2.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={remaining} aria-valuemin={0} aria-valuemax={total}>
        <div className="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center rounded-full whitespace-nowrap" style={{ width: `${remaining / total * 100}%` }} />
      </div>
    </div>
    // <div className="my-4">
    //   <div className="flex justify-between items-center gap-x-2 mb-1">
    //     <h4 className="font-medium text-gray-800 dark:text-neutral-200">
    //       {title}
    //     </h4>
    //     <p className="text-sm text-gray-500 dark:text-neutral-500">
    //       {remaining} of {total} remaining
    //     </p>
    //     <div className="flex w-full h-2.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
    //       <div className="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center rounded-full whitespace-nowrap" style={{ width: '25%' }} />
    //     </div>
    //   </div>
    // </div>
  );
}