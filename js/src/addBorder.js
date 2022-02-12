//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
export function addBorder(picture)
{
    const wall = ("*".repeat((picture[0]).length + 2));
    return [wall, ...picture.map(value=>'*'+value+'*'), wall];
}
