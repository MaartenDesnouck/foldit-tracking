#!/usr/bin/env bash
command=$1
projects=$(ls ./google-apps-script-projects)
for project in $projects
    do
        echo $project
        cd ./google-apps-script-projects/$project/
        $command
        printf '\n'
        cd ../..
    done
