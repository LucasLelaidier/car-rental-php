<?php

use PHPUnit\Framework\TestCase;

class UtilsTest extends TestCase
{
  public function test_premierTest()
  {
    $stack = [];
    $this->assertEmpty($stack);
    $this->assertEquals("1","1");

    return $stack;
  }

  public function test_secondTest()
  {
    $value = 1;
    $this->assertEquals($value,1);
  }
  
}
