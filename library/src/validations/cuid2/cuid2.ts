import type { PipeResult } from '../../types.ts';

/**
 * Creates a validation functions that validates a [cuid2](https://github.com/paralleldrive/cuid2#cuid2).
 *
 * @param options.error The error message.
 * @param options.checkLength Whether to check the length (defaults to `true`).
 *
 * @returns A validation function.
 */
export function cuid2<TInput extends string>(
  { error, checkLength = true }: { error?: string | undefined, checkLength?: boolean | undefined } = {}
) {
  return (input: TInput): PipeResult<TInput> => {
    if ((checkLength && input.length != 24) || !/^[a-z][a-z\d]*$/.test(input))
      return { issue: { validation: 'cuid2', message: error || 'Invalid cuid2', input } };

    return { output: input };
  };
}
