import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "filter",
  // pure: false, 
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any) {
    // console.log('sadsadsa');
    
    return value.filter((search) => {
      return search.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  }
}
