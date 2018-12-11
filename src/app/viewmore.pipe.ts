import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewmore'
})
export class ViewmorePipe implements PipeTransform {

  transform(value: string, args: string) : string {
    // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    // let trail = args.length > 1 ? args[1] : '...';
    let limit = args ? parseInt(args, 10) : 100;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
