import React from 'react';

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, rows = 50, cols = 50, placeholder = '' }) => {
  return (
    <textarea
      className="textarea"
      value={value}
      onChange={onChange}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
