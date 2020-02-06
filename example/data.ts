export const initialData = {
  "id": "editor@0.0.1",
  "nodes": {
    "1": {
      "id": 1,
      "data": {
        "label": "label1",
        "icon": {
          "type": {
            "type": {},
            "compare": null,
            "displayName": "AddCircleTwoToneIcon",
            "muiName": "SvgIcon"
          },
          "key": null,
          "ref": null,
          "props": {},
          "_owner": null,
          "_store": {}
        },
        "type": "Object Add",
        "group": "group",
        "category": "Trigger",
        "outputs": [
          {
            "name": "success",
            "condition": {
              "key": "$.step.result",
              "operator": "==",
              "value": "1"
            }
          },
          {
            "name": "fail",
            "condition": {
              "key": "$.step.result",
              "operator": "==",
              "value": "0"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": []
        }
      },
      "outputs": {
        "success": {
          "connections": [
            {
              "node": 2,
              "input": "input1",
              "data": {}
            }
          ]
        },
        "fail": {
          "connections": []
        }
      },
      "position": [
        0,
        0
      ],
      "name": "Object Add"
    },
    "2": {
      "id": 2,
      "data": {
        "label": "label2",
        "icon": {
          "type": {
            "type": {},
            "compare": null,
            "displayName": "CodeIcon",
            "muiName": "SvgIcon"
          },
          "key": null,
          "ref": null,
          "props": {},
          "_owner": null,
          "_store": {}
        },
        "type": "Script",
        "group": "group",
        "category": "Automation",
        "outputs": [
          {
            "name": "success",
            "condition": {
              "key": "$.step.result",
              "operator": "==",
              "value": "1"
            }
          },
          {
            "name": "fail",
            "condition": {
              "key": "$.step.result",
              "operator": "==",
              "value": "0"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 1,
              "output": "success",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "success": {
          "connections": [
            {
              "node": 4,
              "input": "input1",
              "data": {}
            }
          ]
        },
        "fail": {
          "connections": []
        }
      },
      "position": [
        500,
        0
      ],
      "name": "Script"
    },
    "4": {
      "id": 4,
      "data": {
        "label": "label4",
        "icon": {
          "type": {
            "type": {},
            "compare": null,
            "displayName": "EmailTwoToneIcon",
            "muiName": "SvgIcon"
          },
          "key": null,
          "ref": null,
          "props": {},
          "_owner": null,
          "_store": {}
        },
        "type": "Gmail",
        "group": "group",
        "category": "Notification",
        "outputs": [
          {
            "name": "success",
            "condition": {
              "key": "$.step.result",
              "operator": "==",
              "value": "1"
            }
          },
          {
            "name": "fail",
            "condition": {
              "key": "$.step.result",
              "operator": "==",
              "value": "0"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 2,
              "output": "success",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "success": {
          "connections": []
        },
        "fail": {
          "connections": []
        }
      },
      "position": [
        1000,
        0
      ],
      "name": "Gmail"
    }
  }
}