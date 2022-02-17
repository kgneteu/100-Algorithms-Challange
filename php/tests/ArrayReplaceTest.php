<?php

use PHPUnit\Framework\TestCase;
require "src/array_replace.php";

final class ArrayReplaceTest extends TestCase
{
    public function testArrayReplace()
    {
        $data = [3, 5, 2, 4, 5];
        $actual = array_replace_hac($data,5,8);
        $expected = [3, 8, 2, 4, 8];
        $this->assertEquals($expected, $actual);
    }
}