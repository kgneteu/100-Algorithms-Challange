export function addBorder(picture: string[]): string[] {
    const wall = ("*".repeat((picture[0]).length + 2));
    return [wall, ...picture.map(value => '*' + value + '*'), wall];
}
