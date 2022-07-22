import * as zod from 'zod';

export const announcementValidator = zod.object({
  id: zod.string(),
  name: zod.string().min(1),
  email: zod.string().email().min(1),
  content: zod.string().min(1),
  amount: zod.number().min(1),
  description: zod.string().optional(),
  currentStatus: zod.boolean(),
  createDate: zod.date(),
});

export type GetAnnounceResponseType = zod.infer<typeof announcementValidator>;

export const announcementListValidator = zod.object({
  list: zod.array(announcementValidator),
  total: zod.number(),
});

export type GetAnnounceListResponseType = zod.infer<typeof announcementListValidator>;

export const updateAnnouncementRequestValidator = zod.object({
  id: zod.string(),
  name: zod.string().min(1),
  email: zod.string().email().min(1),
  content: zod.string().min(1),
  amount: zod.number().min(1),
  description: zod.string().optional(),
  currentStatus: zod.boolean(),
  createDate: zod.date(),
});

export type GetAnnounceRequestType = zod.infer<typeof updateAnnouncementRequestValidator>;

export function convertBooleanToString(isTrue: boolean) {
  if (isTrue) return 'true';
  return 'false';
}
