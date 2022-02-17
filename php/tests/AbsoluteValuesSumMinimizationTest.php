<?php

use PHPUnit\Framework\TestCase;
require "src/absolute_values_sum_minimization.php";

final class AbsoluteValuesSumMinimizationTest extends TestCase
{
    public function testAbsoluteValuesSumMinimization()
    {
        $data = [2, 4, 7];
        $actual = absolute_values_sum_minimization($data);
        $expected = 4;
        $this->assertEquals($expected, $actual);
  }
}
