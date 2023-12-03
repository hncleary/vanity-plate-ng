import { NumberTruncatePipe } from './number-truncate.pipe';

describe('NumberTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new NumberTruncatePipe();
    expect(pipe).toBeTruthy();
  });
});
