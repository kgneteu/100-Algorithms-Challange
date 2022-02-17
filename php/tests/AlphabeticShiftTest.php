<?php

use PHPUnit\Framework\TestCase;
require "src/alphabetic_shift.php";

final class AlphabeticShiftTest extends TestCase
{
    public function testAlphabeticShift()
    {
        $data = "crazy";
        $actual = alphabetic_shift($data);
        $expected = "dsbaz";
        $this->assertEquals($expected, $actual);
  }
}
