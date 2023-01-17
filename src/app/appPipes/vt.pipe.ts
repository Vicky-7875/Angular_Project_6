import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "vtpipe",
})
export class VtPipe implements PipeTransform {
  //   transform(value: any) {
  transform(value: any, limit: number) {
    // console.log(value);
    // return value +' vivek trexs'
    // return value.toUpperCase()

    if (value.length > limit) return value.substr(0, limit) + "...";
    else return value;
  }
}
