<?php

use PHPUnit\Framework\TestCase;

class ExempleTest extends TestCase
{
  public function test_premierTest()
  {
    $test = [];
    $this->assertEmpty($test);
  }

  public function test_secondTest()
  {
    $value = 1;
    $this->assertEquals($value,1);
  }

}