import os

def create_structure(base_dir, structure):
    for key, value in structure.items():
        path = os.path.join(base_dir, key)
        if isinstance(value, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, value)
        else:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w') as f:
                f.write(value)

structure = {
    "backend": {
        "api": {
            "__init__.py": "",
            "auth": {
                "__init__.py": "",
                "models.py": "",
                "routes.py": "",
                "schemas.py": "",
                "services.py": ""
            },
            "users": {
                "__init__.py": "",
                "models.py": "",
                "routes.py": "",
                "schemas.py": "",
                "services.py": ""
            },
            "doctors": {
                "__init__.py": "",
                "models.py": "",
                "routes.py": "",
                "schemas.py": "",
                "services.py": ""
            },
            "pathology": {
                "__init__.py": "",
                "models.py": "",
                "routes.py": "",
                "schemas.py": "",
                "services.py": ""
            },
            "illness_diagnosis": {
                "__init__.py": "",
                "diagnosis_model.py": "",
                "routes.py": "",
                "utils.py": ""
            },
            "chatbot": {
                "__init__.py": "",
                "ocr.py": "",
                "report_analysis.py": "",
                "routes.py": ""
            },
            "community": {
                "__init__.py": "",
                "models.py": "",
                "routes.py": "",
                "schemas.py": ""
            }
        },
        "config": {
            "settings.py": "",
            "database.py": "",
            "logging_config.py": ""
        },
        "tests": {
            "__init__.py": "",
            "test_auth.py": "",
            "test_diagnosis.py": "",
            "test_chatbot.py": "",
            "test_routes.py": ""
        },
        "main.py": "",
        "requirements.txt": ""
    },
    "frontend": {
        "user": {
            "public": {},
            "src": {
                "assets": {},
                "components": {
                    "Auth": {},
                    "Dashboard": {},
                    "Forms": {}
                },
                "pages": {},
                "services": {},
                "utils": {},
                "App.js": ""
            },
            "package.json": ""
        },
        "doctor": {
            "public": {},
            "src": {
                "assets": {},
                "components": {},
                "pages": {},
                "services": {},
                "utils": {},
                "App.js": ""
            },
            "package.json": ""
        },
        "pathology": {
            "public": {},
            "src": {
                "assets": {},
                "components": {},
                "pages": {},
                "services": {},
                "utils": {},
                "App.js": ""
            },
            "package.json": ""
        },
        "shared": {
            "components": {},
            "utils": {},
            "styles": {}
        }
    },
    "ml_models": {
        "diagnosis": {
            "model": {
                "trained_model.pkl": "",
                "model.py": "",
                "preprocess.py": ""
            },
            "requirements.txt": ""
        },
        "chatbot": {
            "ocr": {
                "tesseract_model.py": "",
                "utils.py": "",
                "example_images": {}
            },
            "nlp": {
                "report_bot.py": "",
                "utils.py": "",
                "transformers_model.py": ""
            },
            "requirements.txt": ""
        },
        "tests": {
            "test_diagnosis.py": "",
            "test_chatbot.py": "",
            "__init__.py": ""
        }
    },
    "docs": {
        "architecture_diagram.png": "",
        "api_documentation.md": "",
        "database_schema.png": "",
        "wireframes": {
            "user_dashboard.png": "",
            "doctor_dashboard.png": "",
            "pathology_dashboard.png": ""
        },
        "README.md": ""
    },
    "scripts": {
        "deployment": {
            "docker-compose.yml": "",
            "Dockerfile.backend": "",
            "Dockerfile.frontend": "",
            "k8s": {}
        },
        "data_migration": {
            "migrate_data.py": "",
            "seed_data.py": ""
        },
        "monitoring": {
            "monitor_logs.py": "",
            "performance_tests.py": ""
        }
    },
    "README.md": ""
}

if __name__ == "__main__":
    base_dir = "apps"
    os.makedirs(base_dir, exist_ok=True)
    create_structure(base_dir, structure)
    print(f"Project structure created in {base_dir}")
