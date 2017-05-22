/* http://www.angulartutorial.net/2017/03/simple-search-using-pipe-in-angular-2.html */
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: "search"
})

@Injectable()
export class SearchPipe implements PipeTransform{
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter((el: any) => {
                let e = el;
                JSON.stringify(el);
                // console.log(e);
                if((typeof(e.data)) !== 'undefined'){
                    if((typeof(e.data.name) !== 'undefined')){
                        return e.data.name.toLowerCase().indexOf(input) > -1;    
                    }
                }
            });
        }
        return value;
    }

}