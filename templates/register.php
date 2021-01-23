<div class="panel panel-default">
    <div class="panel-body">
        <?php if($loginInfo == 0) { ?>

        <form class="form-horizontal" method="post" action="">
            <fieldset>
                <legend>Register</legend>
                <div class="form-group">
                    <label for="inputName" class="col-lg-2 control-label">Name</label>
                    <div class="col-lg-5">
                        <input type='text' class='form-control' id='firstname' name='first_name' value='<?=@$values["first_name"]?>' placeholder='<?=$defaults["first_name"]?>' >
                    </div>
                    <div class="col-lg-5">
                        <?php echo "<input type='text' class='form-control' id='lastname' name='last_name' value='" . @$values["last_name"] . "' placeholder='" . $defaults["last_name"] . "' >" ?>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                    <div class="col-lg-10">
                        <?php echo "<input type='text' class='form-control' id='email' name='email' value='" . @$values["email"] . "' placeholder='" . $defaults["email"] . "' >" ?>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputUsername" class="col-lg-2 control-label">Username</label>
                    <div class="col-lg-10">
                        <?php echo "<input type='text' class='form-control' id='username' name='username' value='" . @$values["username"] . "' placeholder='" . $defaults["username"] . "' >" ?>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputFirstPassword" class="col-lg-2 control-label">Password</label>
                    <div class="col-lg-5">
                        <?php echo "<input type='password' class='form-control' id='password' name='password' value='" . @$values["password"] . "' placeholder='" . $defaults["password"] . "' >" ?>
                        <div class="checkbox">
                            <label><input type="checkbox" onchange="document.getElementById('password').type = this.checked ? 'text' : 'password'"> Show Password</label>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <?php echo "<input type='password' class='form-control' id='password_two' name='password_two' value='" . @$values["password_two"] . "' placeholder='" . $defaults["password_two"] . "' >" ?>
                    </div>
                </div>
                <div class="form-group">
                    <label for="address" class="col-lg-2 control-label">Contact Info</label>
                    <div class="col-lg-10">
                        <div class="col-lg-6">
                            <?php echo "<input type='text' class='form-control' id='street' name='street' value='" . @$values["street"] . "' placeholder='" . $defaults["street"] . "' >" ?>
                        </div>
                        <div class="col-lg-6">
                            <?php echo "<input type='text' class='form-control' id='city' name='city' value='" . @$values["city"] . "' placeholder='" . $defaults["city"] . "' >" ?>
                        </div>
                        <div class="col-lg-6">
                            <?php echo "<input type='text' class='form-control' id='state' name='state' value='" . @$values["state"] . "' placeholder='" . $defaults["state"] . "' >" ?>
                        </div>
                        <div class="col-lg-6">
                            <?php echo "<input type='text' class='form-control' id='country' name='country' value='" . @$values["country"] . "' placeholder='" . $defaults["country"] . "' >" ?>
                        </div>
                        <div class="col-lg-6">
                            <?php echo "<input type='text' class='form-control' id='zip' name='zip' value='" . @$values["zip"] . "' placeholder='" . $defaults["zip"] . "' >" ?>
                        </div>
                        <div class="col-lg-6">
                            <?php echo "<input type='text' class='form-control' id='phone' name='ph_no' value='" . @$values["ph_no"] . "' placeholder='" . $defaults["ph_no"] . "' >" ?>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-2 control-label">Gender</label>
                    <div class="col-lg-10">
                        <div class="radio">
                            <label>
                                <input type="radio" name="gender" id="genderF" value="F">
                                Female
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="gender" id="genderM" value="M">
                                Male
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="gender" id="genderU" value="U" checked="">
                                Unspecified
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-1 col-lg-offset-2">
                        <button type="reset" id="reset" class="btn btn-default">Cancel</button>
                    </div>
                    <div class="col-lg-1">
                        <button type="submit" id="submit" class="btn btn-primary">Register</button>
                    </div>
                </div>
            </fieldset>
        </form>
        <br>
        <?php
            if(isset($errors)) {
                foreach ($errors as $error) {
                    echo "<div class=\"alert alert-dismissible alert-danger fade in\">\n" .
  					"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" .
  					"$error\n" .
				    "</div>\n";
                }
            }

            if(isset($success) && strlen($success) > 0) {
                echo "<div class=\"alert alert-dismissible alert-success fade in\">\n" .
  					"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" .
  					"$success\n" .
				"</div>\n";
            }
        ?>

        <?php } else { ?>
        <h3 class="lead">You are logged in! Log out to register!</h3>
        <?php } ?>
    </div>
</div>
