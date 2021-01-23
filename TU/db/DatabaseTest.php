<?php

use PHPUnit\Framework\TestCase;
use PHPUnit\DbUnit\TestCaseTrait;

use function PHPUnit\Framework\assertEquals;
use function PHPUnit\Framework\assertTrue;

//WIP
class DatabaseTest extends TestCase
{
  
    //use TestCaseTrait;

    // only instantiate pdo once for test clean-up/fixture load
    static private $pdo = null;

    // only instantiate PHPUnit\DbUnit\Database\Connection once per test
    private $conn = null;


    public function test_first(){
        $this->getConnection();
        $resInsertTables =  $this->insertSQL("migrate_00.sql");
        $resInsertDatas = $this->insertSQL("migrate_01.sql");

        //$test = $this->conn->exec("SELECT _name FROM cars WHERE _id = 1");

        $this->conn = null;

        //assertTrue($resInsertTables);
        //assertTrue($resInsertDatas);

    }


    final public function getConnection()
    {
        if ($this->conn === null) {
            if (self::$pdo == null) {
                self::$pdo = new PDO('sqlite::memory:');
            }
            $this->conn = self::$pdo;
            //$this->conn = $this->createDefaultDBConnection(self::$pdo, ':memory:');
            
        }
        
        return $this->conn;
    }


    public function insertSQL($filename)
    {
        try{            
            $file = fopen($filename, "r");            
            $content = fread($file, filesize($filename));            
            $reqs = explode(";",$content);
            
            foreach($reqs as $req){
                $this->conn->exec($req);
            }
            return true;
            
        }catch(Exception $ex){
            
        }       
    }






  
}
