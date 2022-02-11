<?php
# Given a rectangular matrix of characters, add a border of asterisks(*) to it.
function add_border($picture): array
{
    $wall = str_repeat("*", strlen($picture[0]) + 2);
    return [$wall, ...array_map(fn($value)=>'*'.$value.'*', $picture), $wall];
}
