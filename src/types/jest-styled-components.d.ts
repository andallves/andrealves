import { Plugin, NewPlugin } from 'pretty-format';

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbal;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      maedia?: string;
      modifier?: string;
      supports?: string;
    }

    interface Matcher<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}