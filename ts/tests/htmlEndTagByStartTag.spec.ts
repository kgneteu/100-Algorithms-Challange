import {htmlEndTagByStartTag} from '../src/htmlEndTagByStartTag';

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

    it('Test 3', () => {
        const startTag = "<div id='my_area' class='data' title='This is a test for title on Div tag'>";
        const response = htmlEndTagByStartTag(startTag);
        expect(response).toEqual("</div>");
    });

    it('Test 4', () => {
        const startTag = "<html>";
        const response = htmlEndTagByStartTag(startTag);
        expect(response).toEqual("</html>");
    });

    it('Test 5', () => {
        const startTag = "<TABLE border='1'>";
        const response = htmlEndTagByStartTag(startTag);
        expect(response).toEqual("</TABLE>");
    });
});
