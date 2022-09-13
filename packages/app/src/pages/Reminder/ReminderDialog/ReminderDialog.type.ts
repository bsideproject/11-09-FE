export interface ReminderDialogProps {
  dialogType: 'reminder' | 'reminderSuccess' | 'goMain' | 'idNull';
  dialogClose: () => void;
}
