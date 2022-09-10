declare namespace APISchema {
  type LetterFormType = 'DRAFT' | 'DONE';

  interface Letter {
    userID?: string;
    senderName?: string;
    receiverName?: string;
    receivedDate?: string; // "yyyy-MM-dd HH:mm:ss"
    content?: string;
    id?: string;
    imageId?: string;
    letterStatus?: LetterFormType;
    receivedPhoneNumber?: string;
    title?: string;
  }

  interface LetterImagePostReq {
    letterId: string;
    file: File;
  }

  interface User {
    id: string;
    username: string;
    email: string;
    token: string;
    nickname?: string;
    ageRange?: string;
    birthday?: string;
    birthyear?: string;
    gender?: string;
    password?: string;
    phoneNumber?: string;
  }
}
