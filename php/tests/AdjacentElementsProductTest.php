<?php

use PHPUnit\Framework\TestCase;

require "src/adjacent_elements_product.php";

final class AdjacentElementsProductTest extends TestCase
{
    public function testAdjacentElementsProduct()
    {
        $data = [3, 6, -2, -5, 7, 3];
        $actual = adjacent_elements_product($data);
        $expected = 21;
        $this->assertEquals($expected, $actual);
    }
}
