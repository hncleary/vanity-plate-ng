import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericFilter'
})
export class GenericFilterPipe implements PipeTransform {
    /**
     * @description Filters a given object array by any object values containing the given filter string.
     * @param data - Object array
     * @param filter - Filter string
     * @param excludeProps - Optional list of property names to exclude from the filter.
     */
    transform<T extends object>(data: T[], filter: string, excludeProps: string[] = []): T[] {
      let filtered = data;
      if (filter) {
          filtered = filtered.filter((d) => this.data2String(d, excludeProps).includes(filter.toLowerCase().trim()));
      }
      return filtered;
  }
  private data2String<T extends object>(d: T, excludeProps: string[]): string {
      let str = '';
      for (const [_key, value] of Object.entries(d)) {
          if (!excludeProps.includes(_key)) {
              str += JSON.stringify(value) ?? '';
          }
      }
      return str.toLocaleLowerCase();
  }
}
