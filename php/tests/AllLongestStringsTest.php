<?php

use PHPUnit\Framework\TestCase;
require "src/all_longest_strings.php";

final class AllLongestStringsTest extends TestCase
{
    public function testAllLongestStrings()
    {
        $data = ["aba", "aa", "ad", "vcd", "aba"];
        $actual = all_longest_strings($data);
        $expected = ["aba", "vcd", "aba"];
        $this->assertEquals($expected, $actual);
  }
}
