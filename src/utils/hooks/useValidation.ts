import { useEffect, useState } from 'react';
import { type InferType, type BaseSchema, StringSchema } from 'yup';

export const useValidation = (value: any, schema: StringSchema) => {
  const [errors, setErrors] = useState<unknown>();

  useEffect(() => {
    async function validateValues() {
      const validationErrors = await schema.validate(value, { strict: true });

      setErrors(validationErrors);
    }

    validateValues();
  }, [value]);
};
