<?php

use PHPUnit\Framework\TestCase;
require "src/add_border.php";

final class AddBorderTest extends TestCase
{
    public function testAddBorder()
    {
        $data = ["abc", "ded"];
        $actual = add_border($data);
        $expected = [
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ];
        $this->assertEquals($expected, $actual);
  }
}