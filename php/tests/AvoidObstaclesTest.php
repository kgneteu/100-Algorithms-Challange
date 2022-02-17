<?php

use PHPUnit\Framework\TestCase;

require "src/avoid_obstacles.php";

final class AvoidObstaclesTest extends TestCase
{
    public function testAvoidObstacles1()
    {
        $data = [5, 3, 6, 7, 9];
        $actual = avoid_obstacles($data);
        $expected = 4;
        $this->assertEquals($expected, $actual);
    }

    public function testAvoidObstacles2()
    {
        $data = [1, 3, 5, 7, 9];
        $actual = avoid_obstacles($data);
        $expected = 2;
        $this->assertEquals($expected, $actual);
    }

    public function testAvoidObstacles3()
    {
        $data = [2, 5, 7, 9];
        $actual = avoid_obstacles($data);
        $expected = 4;
        $this->assertEquals($expected, $actual);
    }

    public function testAvoidObstacles4()
    {
        $data = [2, 4, 7, 10];
        $actual = avoid_obstacles($data);
        $expected = 3;
        $this->assertEquals($expected, $actual);
    }
}
