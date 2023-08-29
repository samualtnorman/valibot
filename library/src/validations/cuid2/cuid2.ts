import type { PipeResult } from '../../types.ts';

/**
 * Creates a validation functions that validates a [cuid2](https://github.com/paralleldrive/cuid2#cuid2).
 *
 * @param options.error The error message.
 * @param options.length The length of the cuid2 (defaults to `24`).
 *
 * @returns A validation function.
 */
export function cuid2<TInput extends string>(
  { error, length = 24 }: { error?: string | undefined, length?: number | undefined } = {}
) {
  return (input: TInput): PipeResult<TInput> => {
    if (!/^[a-z][a-z\d]*$/.test(input) || input.length != length) {
      return { issue: { validation: 'cuid2', message: error || 'Invalid cuid2', input } };
    }
    return { output: input };
  };
}
