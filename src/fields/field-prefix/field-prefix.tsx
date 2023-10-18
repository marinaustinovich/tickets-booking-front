import React, { createContext, ReactNode } from 'react';
import { Field, FieldProps } from 'react-final-form';

import { FieldValue } from 'validators';

export const FieldPrefixContext = createContext<string>('');

export const FieldPrefix: React.FC<{ prefix: string; children: ReactNode }> = ({ prefix, children }) => (
    <FieldPrefixContext.Provider value={prefix}>{children}</FieldPrefixContext.Provider>
);

export const PrefixedField: React.FC<{ name: string } & FieldProps<FieldValue, never>> = ({ name, ...props }) => (
    <FieldPrefixContext.Consumer>{prefix => <Field {...props} name={`${prefix}.${name}`} />}</FieldPrefixContext.Consumer>
);
