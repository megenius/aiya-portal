import React from 'react';
import { Form, useParams, useSearchParams } from '@remix-run/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useBotInquiryInsert } from '~/hooks/bot/useBotInquiryInsert';

const inquirySchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  inquiry_type: z.enum(['general', 'technical', 'bug', 'feature', 'billing', 'other']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).default('medium'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const Route = () => {
  const [search] = useSearchParams();
  const botId = search.get('id')
  const insertInquiry = useBotInquiryInsert();
  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      priority: 'medium',
      inquiry_type: 'general'
    }
  });

  const onSubmit = async (data: InquiryFormData) => {
    console.log('Submitting inquiry:', data);
    if (!botId) {
      alert('ID is required');
      return;
    }


    if (!botId) return;

    try {
      await insertInquiry.mutateAsync({
        variables: {
          botId,
          data: {
            ...data,
            bot: botId,
            status: 'new',
            // date_created: new Date().toISOString(),
          }
        }
      });

      // Reset form after successful submission
      reset();
      alert('Inquiry submitted successfully');
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      // Optional: Show error message
      alert('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contact Support
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We'll get back to you as soon as possible
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <div className="grid gap-4 lg:gap-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium dark:text-white">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 font-medium dark:text-white">
                Email *
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone field */}
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 font-medium dark:text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Subject field */}
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-700 font-medium dark:text-white">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Inquiry Type field */}
            <div>
              <label htmlFor="inquiry_type" className="block text-sm text-gray-700 font-medium dark:text-white">
                Inquiry Type *
              </label>
              <select
                id="inquiry_type"
                {...register('inquiry_type')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <option value="">Select type</option>
                <option value="general">General Question</option>
                <option value="technical">Technical Support</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="billing">Billing</option>
                <option value="other">Other</option>
              </select>
              {errors.inquiry_type && (
                <p className="text-red-500 text-sm mt-1">{errors.inquiry_type.message}</p>
              )}
            </div>

            {/* Priority field */}
            <div>
              <label htmlFor="priority" className="block text-sm text-gray-700 font-medium dark:text-white">
                Priority
              </label>
              <select
                id="priority"
                {...register('priority')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>
              )}
            </div>

            {/* Description field */}
            <div>
              <label htmlFor="description" className="block text-sm text-gray-700 font-medium dark:text-white">
                Description *
              </label>
              <textarea
                id="description"
                rows={4}
                {...register('description')}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting || insertInquiry.isPending}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              {(isSubmitting || insertInquiry.isPending) ? (
                <>
                  <span
                    className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  />
                  <span>Submitting...</span>
                </>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Route;