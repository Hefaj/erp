export default interface GroupRadioItem {
  id: number,
  label: string;
  disabled?: boolean;
  checked?: boolean;
  labelPosition?: 'before' | 'after';
}
