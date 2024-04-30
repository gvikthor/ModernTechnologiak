<?php
function highlight_array($array, $name = 'var')
{
    highlight_string("<?php\n\$$name =\n" . var_export($array, true) . ";\n?>");
}

function redirect($location = 'index.php')
{
    header("Location:$location");
    die;
}

function read_json($filename)
{
    return json_decode(file_get_contents($filename));
}

function write_json($filename, $data)
{
    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
}

function add_new_element($filename, $element)
{
    $data = read_json($filename);
    $data[] = $element;
    write_json($filename, $data);
}

function delete_element($filename, $id)
{
    $data = read_json($filename);
    /*$filtered_fata = array_filter($data, function ($elem) use ($id) {
        return $elem->id != $id;
    });
    write_json($filename, $filtered_fata);*/


    $flitered_data = [];
    foreach($data as $elem){
        if($elem->id != $id){
            $flitered_data[] = $elem;
        }
    }
    write_json($filename, $flitered_data);
 /*
    write_json(
        $filename,
        array_filter(
            read_json($filename),
            function ($elem) use ($id) {
                return $elem->id != $id;
            }
        )
    );
    */
}
