import { htmlEndTagByStartTag } from '../src/htmlEndTagByStartTag';

describe(htmlEndTagByStartTag.name, () => {
    it('Test 1', () => {
       
        const startTag = "<button type='button' disabled>";

   
        const response = htmlEndTagByStartTag(startTag);

 
        expect(response).toBe("</button>");
    });

    it('Test 2', () => {
       
        const startTag = '<i>';

   
        const response = htmlEndTagByStartTag(startTag);

 
        expect(response).toEqual('</i>');
    });
});
