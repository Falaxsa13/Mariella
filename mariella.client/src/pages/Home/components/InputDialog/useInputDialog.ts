import { useState, useEffect } from "react";
import BaseModel from "../../../../models/BaseModel";

export function useInputDialog<T extends BaseModel>(
  initialModels: T[],
  createModel: (id: number) => T,
  onModelsChange: (models: T[]) => void
) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [models, setModels] = useState<T[]>(initialModels);
  const [currentModel, setCurrentModel] = useState<T>();

  useEffect(() => {
    onModelsChange(models);
  }, [models]);

  const openDialog = (model?: T) => {
    if (model == undefined) {
      const id =
        models.length > 0
          ? Math.max(...models.map((model) => model.id)) + 1
          : 0;
      model = createModel(id);
      setModels([...models, model]);
    }

    setCurrentModel(model);
    setIsDialogOpen(true);
  };

  return {
    models,
    setModels,
    isDialogOpen,
    setIsDialogOpen,
    currentModel,
    setCurrentModel,
    openDialog,
  };
}
