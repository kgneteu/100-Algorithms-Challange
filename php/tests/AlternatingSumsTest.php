<?php

use PHPUnit\Framework\TestCase;

require "src/alternating_sums.php";

final class AlternatingSumsTest extends TestCase
{
    public function testAlternatingSums()
    {
        $data = [50, 60, 60, 45, 70];
        $actual = alternating_sums($data);
        $expected = [180, 105];
        $this->assertEquals($expected, $actual);
    }
}