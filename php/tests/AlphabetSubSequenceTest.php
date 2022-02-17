<?php

use PHPUnit\Framework\TestCase;

require "src/alphabet_subsequence.php";

final class AlphabetSubSequenceTest extends TestCase
{
    public function testAlphabetSubSequence()
    {
        $data = "effg";
        $actual = alphabet_subsequence($data);
        $expected = false;
        $this->assertEquals($expected, $actual);
    }

    public function testAlphabetSubSequence2()
    {
        $data = "ace";
        $actual = alphabet_subsequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }
}