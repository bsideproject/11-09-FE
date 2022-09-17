export interface ReminderDialogProps {
  dialogType: 'reminder' | 'reminderSuccess' | 'goMain' | 'idNull' | 'reminderFail';
  dialogClose: () => void;
}
