<!DOCTYPE html>
<html>
<head>
  <title>Login Form with Bootstrap 4</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

  <div class="modal=dialog text-center">
    <div class="col-lg-4 col-sm-8 main-section">
      <div class="modal-content">

        <div class="col-12 user-img">
          <img src="img/face.png">
        </div>

        <form action="login.php" method="POST" class="col-12">

          <div class="form-group">
            <input type="text" name="usuario" class="form-control" 
            placeholder="user">
          </div>

          <div class="form-group">
              <input type="password" name="password" class="form-control" 
              placeholder="123">
            </div>
            <button type="submit" class="btn"><i class="fa fa-sign-in-alt"></i>
              Iniciar 
            </button>

        </form>

        <div class="col-12 forgot">
          <a href="#">Forgot Password ></a>


        </div>

      </div>
      <!--final de modal-->



    </div>
  </div>





</body>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>

  </html>
























