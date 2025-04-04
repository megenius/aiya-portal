import { pl } from 'date-fns/locale';
import { t } from 'i18next';
import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { SaasPrice } from '~/@types/app';
import { useCancelSubscription } from '~/hooks/billings/useCancelSubscription';
import useCurrentBillingPlan from '~/hooks/billings/useCurrentBillingPlan';
import { useStripeCreateCheckoutSession } from '~/hooks/billings/useStripeCreateCheckoutSession';
import { useLanguage } from '~/hooks/useLanguage';
import { useMe } from '~/hooks/useMe';
import { cn } from '@repo/ui/utils';
import { formatDate } from 'date-fns';
import DeleteModal from '~/components/DeleteModal';

interface PricingCardProps {
  isAnnual: boolean;
  plans: SaasPrice[]
}

const ANNUAL_DISCOUNT = 0.15

const PricingCards: React.FC<PricingCardProps> = ({ isAnnual, plans }) => {
  const checkout = useStripeCreateCheckoutSession();
  const cancelSubscription = useCancelSubscription()
  const { locale } = useLanguage();
  const { data: currentPlan, isLoading, refetch } = useCurrentBillingPlan()
  const { data: user } = useMe()
  const [isCanceling, setIsCanceling] = React.useState(false)

  const handleCheckout = async (plan: SaasPrice, action: string) => {
    if (plan.pricing_type === 'free') {
      cancelSubscription.mutateAsync({
        stripeSubscriptionId: currentPlan?.subscription?.id as string
      }).then(() => {
        setTimeout(() => {
          toast.success(t('billing.subscription.cancel.success'))
          refetch()
          setIsCanceling(false)
        }, 3000)
      })
    } else {

      if (!user?.email) {
        toast.error(t('billing.plan.error.email_required'));
        return;
      }

      checkout.mutate({
        currentSubscriptionId: currentPlan?.subscription?.id,
        currentPriceId: currentPlan?.subscription?.stripe_price_id,
        newPriceId: plan.id,
        email: user?.email, annual: isAnnual,
        price: plan.unit_amount,
        action
      });
    }
  }

  const handleCancel = () => {
    setIsCanceling(true)
    cancelSubscription.mutateAsync({
      stripeSubscriptionId: currentPlan?.subscription?.id as string
    }).then(() => {
      setTimeout(() => {
        toast.success(t('billing.subscription.cancel.success'))
        refetch()
        setIsCanceling(false)
      }, 3000)
    })
  }

  const isCurrent = (plan: SaasPrice) => {
    return currentPlan?.subscription?.stripe_price_id === plan.id
  }

  const isUpgrade = (plan: SaasPrice) => {
    const planAmount = plan.unit_amount
    const currentAmount = Number(currentPlan?.subscription?.amount || 0)
    // if subscription price is higher than the plan price then show "Upgrade" text
    return currentAmount < planAmount
  }

  const getButtonText = (plan) => {
    if (currentPlan?.subscription?.cancel_at_period_end) {
      if (isCurrent(plan)) {
        return t('billing.plan.cancelling', {
          date: formatDate(new Date(currentPlan.subscription.current_period_end), 'PPP', {
            locale
          })
        });
      }

      return t('billing.plan.choose');
    }

    if (isCurrent(plan)) {
      return t('billing.plan.current');
    } else if (currentPlan?.plan?.pricing_type === 'free') {
      return t('billing.plan.choose');
    }

    const planAmount = plan.unit_amount
    const currentAmount = Number(currentPlan?.subscription?.amount || 0)

    // if subscription price is higher than the plan price then show "Upgrade" text
    if (currentAmount < planAmount) {
      return t('billing.plan.upgrade');
    } else if (currentAmount > planAmount) {
      if (plan.unit_amount === 0) {
        return t('billing.plan.actions.cancel')
      }
      return t('billing.plan.downgrade');
    }

    return t('billing.plan.choose');
  }

  const getButtonStatus = (plan) => {
    if (currentPlan?.subscription?.cancel_at_period_end) {
      return isCurrent(plan) ? false : true
    }

    if (isCurrent(plan)) {
      return false;
    }

    return false;
  }

  const filteredPlans = useMemo(() => {
    // return plans.filter(plan => {
    //   if (currentPlan?.subscription) {
    //     return plan.pricing_type !== 'free'
    //   }

    //   return true
    // })
    return plans
  }, [plans, isAnnual, currentPlan])

  if (isLoading) {
    return (
      <div>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
          <li className="w-full h-4 bg-gray-200 rounded-full" />
        </ul>
      </div>
    )
  }

  return (
    <>
      <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-4 mx-auto">
        {/* Price Cards */}
        <div className={`grid lg:grid-cols-${filteredPlans.length} gap-6`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 bg-white border ${plan.popular ? 'border-blue-500' : 'border-gray-200'
                } rounded-xl dark:bg-neutral-800 dark:border-neutral-700`}
            >
              {/* Icon and Popular Badge */}
              <div className="flex justify-between items-center gap-x-2 mb-3">
                {plan.svg_icon && <div dangerouslySetInnerHTML={{ __html: plan.svg_icon }} />}
                {plan.popular && (
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Most popular
                  </span>
                )}
              </div>

              {/* Plan Name and Price */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-center gap-x-0.5">
                <span className="text-xl font-normal text-gray-800 dark:text-neutral-200">{plan.currency}</span>
                <p className="text-gray-800 font-semibold text-3xl dark:text-neutral-200">
                  <NumericFormat thousandSeparator="," value={plan.unit_amount} displayType="text" />
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500">
                {plan.unit_amount === 0 && "forever free"}
                {plan.unit_amount !== 0 && `per ${plan.pricing_plan_interval} incl. VAT`}
              </p>

              {/* CTA Button */}
              <div className="mt-5">
                <button
                  type="button"
                  className={
                    cn("w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg", {
                      "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500": !isCurrent(plan),
                      "border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700": isCurrent(plan)
                    })
                  }
                  disabled={
                    checkout.isPending ||
                    isCurrent(plan) ||
                    getButtonStatus(plan)
                  }
                  // data-hs-overlay={plan.pricing_type === 'free' ? "#hs-pro-cancel-subscription" : ""}
                  // data-hs-overlay="#hs-pro-cancel-subscription"
                  onClick={() => {
                    if (plan.pricing_type !== 'free') {
                      handleCheckout(plan, isUpgrade(plan) ? 'upgrade' : 'downgrade')
                    } else {
                      const modal = document.getElementById('hs-pro-cancel-subscription')
                      if (modal) {
                        window.HSOverlay.open(modal);
                      }
                    }
                  }}
                >
                  {getButtonText(plan)}
                </button>

              </div>

              <FeatureList markdownContent={plan.description} />
            </div>
          ))}
        </div >

        {/* Annual Savings Note */}
        {
          isAnnual && (
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-neutral-500">
              Save 15% with annual billing and get 20% extra credits monthly
            </div>
          )
        }
      </div >
      <DeleteModal id="hs-pro-cancel-subscription"
        title={t("billing.subscription.cancel.title")}
        warning={t("billing.subscription.cancel.warning")}
        confirmButton={t("billing.subscription.cancel.confirmButton")}
        cancelButton={t("billing.subscription.cancel.cancelButton")}
        onOk={handleCancel}
      />
    </>
  );
};

export default PricingCards;


const FeatureList = ({ markdownContent }) => {

  const parseCheckbox = (content) => {
    const isChecked = content.startsWith("[x] ");
    const text = content.replace(/^\[.\]\s*/, "");
    return { isChecked, text };
  };

  return (
    <ReactMarkdown
      components={{
        ul: ({ node, ...props }) => (
          <ul className="mt-5 space-y-2.5" {...props} />
        ),
        li: ({ children, ...props }) => {
          const { isChecked, text } = parseCheckbox(children);

          return (
            <li {...props} className="flex gap-x-2">
              <svg
                className={cn("shrink-0 mt-0.5 size-4",
                  { "text-blue-600 dark:text-blue-500": isChecked, "text-gray-400 dark:text-neutral-600": !isChecked }
                )}
                xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm text-gray-800 dark:text-neutral-200">
                {text}
              </span>
            </li>
          )
        },
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

