export function sharedModels(): string {
  return 'shared-models';
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  type: 'private' | 'public';
  memberIds: string[];
  pendingMemberIds?: string[];
  bannedUserIds?: string[];
  ownerId: string;
  createdAt: string;
  isActive: boolean;
  lastActivityAt?: string;
}

export interface Message {
  id: string;
  roomId: string;
  userId: string;
  text: string;
  sentAt: string;
  readBy: string[];
  deliveredTo: string[];
  attachments?: Attachment[];
  replyTo?: string;
}

export interface Attachment {
  id: string;
  type: 'image' | 'video' | 'file';
  url: string;
  filename: string;
  size: number; // in bytes
  mineType: string; // file formats
}

export interface UserPresence {
  userId: string;
  status: 'online' | 'offline' | 'away';
  lastSeenAt?: string;
}

// For user authentication
export interface AuthUser {
  email: string;
  password: string;
}

// For user registration
export interface UserCreate {
  username: string;
  email: string;
  password: string;
}
